export class Country {
    constructor(name, code, flag) {
        this.name = name
        this.flag = flag
        this.code = code
    }
}

export const countries = [
    new Country("Kenya", "kenya", "🇰🇪"),
    new Country("Burundi", "burundi", "🇧🇮"),
    new Country("Tanzania", "tanzania", "🇹🇿"),
    new Country("RDC", "drc", "🇨🇩"),
    new Country("Rwanda", "rwanda", "🇷🇼"),
    new Country("Uganda", "uganda", "🇺🇬"),
    new Country("Ivory-coast", "ivory", "🇨🇮"),
    new Country("Zambia", "zambia", "🇿🇲"),
    new Country("South Africa", "safrica", "🇿🇦"),
    new Country("Nigeria", "nigeria", "🇳🇬"),
    new Country("Dubai", "dubai", "🇦🇪"),
    new Country("Philippines", "philippine", "🇵🇭"),
    new Country("Others", "others", "🌍")
]
