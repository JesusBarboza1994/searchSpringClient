import apiFetch from "./api-fetch"

export async function getCodes({brand, model, position, startYear, endYear, version, currentPage} ){
  const searchUrls = []
  if(brand) searchUrls.push(`brand=${brand}`)
  if(model) searchUrls.push(`model=${model}`)
  if(position) searchUrls.push(`position=${position}`)
  if(startYear) searchUrls.push(`start_year=${startYear}`)
  if(endYear) searchUrls.push(`end_year=${endYear}`)
  if(version) searchUrls.push(`version=${version}`)
  if(currentPage) searchUrls.push(`page=${currentPage}`)
  const url = 'codes?' + searchUrls.join('&&')
  const codes =  await apiFetch(url)
  console.log("CODES",codes)
  return codes
  
}

export async function getCode(id){
  const url = `codes/${id}` 
  const code =  await apiFetch(url)
  console.log("SPRING",code)
  return code
  
}