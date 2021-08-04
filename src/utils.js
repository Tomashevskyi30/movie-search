export const getYear = (date) => {
  return new Date(date).getFullYear();
};
export const formatDate = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  date = new Date(date);
  let month = monthNames[date.getMonth()];
  let day = date.getDay();
  switch (day) {
    case 1:
      day = `${day}st`;
      break;
    case 2:
      day = `${day}nd`;
      break;
    case 3:
      day = `${day}rd`;
      break;
    default:
      day = `${day}th`;
      break;
  }
  let year = date.getFullYear();
  return `${day} ${month}, ${year}`;
};

console.log(formatDate("2021-05-19"));

export const getMovieGenres = (genresList,genresNeed)=>{
    return genresList.filter((genreObj)=>{
        return genresNeed.includes(genreObj.id)
    })
}

export const getNames = (namesList)=>{
    let names = ""
    namesList.forEach(el=>{
        names+=" "+el.name+','
    })
    return names.slice(0,names.length-1).trim()
}