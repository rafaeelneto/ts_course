export const stringToDate = (s: string): Date => {
  const dateArr = s.split('/').map((value)=>{
    return parseInt(value)
  });
  return new Date(dateArr[2], dateArr[1]-1, dateArr[0])
}