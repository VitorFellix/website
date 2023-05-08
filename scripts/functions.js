function AgeCalculator(year, month, day){
    // Date uses month values beggining on 0, so 7 is august, 6 is july and so on
    let birthday = new Date(year, month - 1, day, 0, 0, 0, 0);
    let now = new Date();
    var age = now.getFullYear() - birthday.getFullYear();
    if (now.getMonth() <= birthday.getMonth() && now.getDate() <= birthday.getDate()){
        age -= 1;
    }
    return age;
}