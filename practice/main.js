const fs = require('fs')

const API_KEY = 'c841349e10d905f8ffe5afd4fcaa'
const API_GET_URL = `https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=${API_KEY}`
const API_POST_URL = `https://candidate.hubteam.com/candidateTest/v3/problem/result?userKey=${API_KEY}`

const testData = {
    partners: [
        {
            firstName: 'Darin',
            lastName: 'Daignault',
            email: 'ddaignault@hubspotpartners.com',
            country: 'United States',
            availableDates: ['2017-05-03', '2017-05-06'],
        },
        {
            firstName: 'Crystal',
            lastName: 'Brenna',
            email: 'cbrenna@hubspotpartners.com',
            country: 'Ireland',
            availableDates: ['2017-04-27', '2017-04-29', '2017-04-30'],
        },
        {
            firstName: 'Janyce',
            lastName: 'Gustison',
            email: 'jgustison@hubspotpartners.com',
            country: 'Spain',
            availableDates: ['2017-04-29', '2017-04-30', '2017-05-01'],
        },
        {
            firstName: 'Tifany',
            lastName: 'Mozie',
            email: 'tmozie@hubspotpartners.com',
            country: 'Spain',
            availableDates: ['2017-04-28', '2017-04-29', '2017-05-01', '2017-05-04'],
        },
        {
            firstName: 'Temple',
            lastName: 'Affelt',
            email: 'taffelt@hubspotpartners.com',
            country: 'Spain',
            availableDates: ['2017-04-28', '2017-04-29', '2017-05-02', '2017-05-04'],
        },
        {
            firstName: 'Robyn',
            lastName: 'Yarwood',
            email: 'ryarwood@hubspotpartners.com',
            country: 'Spain',
            availableDates: ['2017-04-29', '2017-04-30', '2017-05-02', '2017-05-03'],
        },
        {
            firstName: 'Shirlene',
            lastName: 'Filipponi',
            email: 'sfilipponi@hubspotpartners.com',
            country: 'Spain',
            availableDates: ['2017-04-30', '2017-05-01'],
        },
        {
            firstName: 'Oliver',
            lastName: 'Majica',
            email: 'omajica@hubspotpartners.com',
            country: 'Spain',
            availableDates: ['2017-04-28', '2017-04-29', '2017-05-01', '2017-05-03'],
        },
        {
            firstName: 'Wilber',
            lastName: 'Zartman',
            email: 'wzartman@hubspotpartners.com',
            country: 'Spain',
            availableDates: ['2017-04-29', '2017-04-30', '2017-05-02', '2017-05-03'],
        },
        {
            firstName: 'Eugena',
            lastName: 'Auther',
            email: 'eauther@hubspotpartners.com',
            country: 'United States',
            availableDates: ['2017-05-04', '2017-05-09'],
        },
    ],
}

const getPartners = async () => {
    try {
        const result = await fetch(API_GET_URL)
        const data = await result.json()
        return data.partners
    } catch (error) {
        console.error(error)
    }
}

const sendBestDatesAndAttendants = async data => {
    try {
        const result = await fetch(API_POST_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        const json = await result.json()
        return json
    } catch (error) {
        console.error(error)
    }
}

const sortPartnersByCountry = partners => {
    if (!Array.isArray(partners) || partners.length === 0) return []
    const partnersSortedByCountry = []
    partners.forEach(partner => {
        const country = { name: partner.country }
        const countryIndex = partnersSortedByCountry.findIndex(
            country => country.name === partner.country
        )
        if (countryIndex !== -1) {
            partnersSortedByCountry[countryIndex].members.push({
                email: partner.email,
                availableDates: partner.availableDates,
            })
        } else {
            country.members = [
                {
                    email: partner.email,
                    availableDates: partner.availableDates,
                },
            ]
            partnersSortedByCountry.push(country)
        }
    })
    return partnersSortedByCountry
}

const getBestDatesByCountry = partnersSortedByCountry => {
    const result = []
    partnersSortedByCountry.forEach(country => {
        let potentialDates = {}
        const oneDay = 86400 * 1000
        country.members.forEach(member => {
            for (let i = 0; i < member.availableDates.length; i++) {
                const parsedDate = Date.parse(member.availableDates[i])
                const nextDay = new Date(parsedDate + oneDay)
                const nextDayIso = nextDay.toISOString().split('T', 1)[0]

                if (member.availableDates.includes(nextDayIso)) {
                    if (!potentialDates[parsedDate]) {
                        potentialDates[parsedDate] = [member.email]
                    } else {
                        potentialDates[parsedDate].push(member.email)
                    }
                }
            }
        })

        const listOfPotentialDates = Object.entries(potentialDates)

        listOfPotentialDates.sort((a, b) => {
            if (a[1].length > b[1].length) return -1
            if (a[1].length < b[1].length) return 1
            else return a[0] - b[0]
        })

        if (listOfPotentialDates.length === 0) {
            result.push({
                attendeeCount: 0,
                attendees: [],
                name: country.name,
                startDate: null,
            })
            return
        } else {
            const newDate = new Date(parseInt(listOfPotentialDates[0][0]))
            const convertNewDate = newDate.toISOString().split('T', 1)[0]
            const attendees = listOfPotentialDates[0][1]
            attendees.sort()
            const dataToPush = {
                attendeeCount: listOfPotentialDates[0][1].length,
                attendees,
                name: country.name,
                startDate: convertNewDate,
            }
            result.push(dataToPush)
        }
    })
    return {
        countries: result,
    }
}

;(async () => {
    const partners = await getPartners()
    const partnersSortedByCountry = sortPartnersByCountry(partners)
    const bestDatesByCountry = getBestDatesByCountry(partnersSortedByCountry)

    const result = await sendBestDatesAndAttendants(bestDatesByCountry)
})()
