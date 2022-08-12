const companies = [
    { name: 'Company One', category: 'Finance', start: 1993, end: 2003 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Finance', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Auto', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

//for Loop
const forLoop = () => {
    for (let i = 0; i < companies.length; i++) {
        console.log(companies[i])
    }
}

//forEach (can take an iterator, an index, start index, and end index )
const forEach = () => {
    companies.forEach(company => console.log(company.name))
}

//filter (returns a copy of the original list with the filtered results)
const forLoopDrinkingAdults = () => {
    let canDrink = []
    for (let i = 0; i < ages.length; i++) {
        if (ages[i] >= 21) {
            canDrink.push(ages[i])
        }
    }
    console.log(canDrink)
}

const filterDrinkingAdults = () => {
    const canDrink2 = ages.filter(age => age >= 21)
    console.log(canDrink2)
}

const getRetailCompanies = () => {
    const retailCompanies = companies.filter(
        company => company.category === 'Retail'
    )
    console.log(retailCompanies)
}

const getEigthtysCompanies = () => {
    const eightysCompanies = companies.filter(
        company => company.start >= 1980 && company.start < 1990
    )
    console.log(eightysCompanies)
}

const getTenYearOldCompanies = () => {
    const tenYearOldCompanies = companies.filter(
        company => company.end - company.start >= 10
    )
    console.log(tenYearOldCompanies)
}

getTenYearOldCompanies()
