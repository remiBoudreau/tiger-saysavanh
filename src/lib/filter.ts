export const filter: Function = (
  filterArr: Array<category> & Array<album>, 
  paths: Array<string>
  ): Array<album & photo> => {
  const getArray: Function = (filterObj: category | album) => {
    for (const value of Object.values(filterObj)) {
      if (Array.isArray(value)) {
        return value
      }
    }
  }

  let filterObj: category | album
  let array: Array<album & photo> | undefined
  let photoArray: Array<album & photo> 

  [filterObj] = filterArr.filter(obj  => obj.slug === paths[0])
  array = getArray(filterObj)
  photoArray = array!.map(photoObj => {
    return({
      key: photoObj.key,
      photo: photoObj.photo,
      title: photoObj.title,
      slug: photoObj.slug,
      photos: photoObj.photos,
      details: photoObj.details,
      color: photoObj.color
    })
  })
  paths.shift()
  if (paths.length) {
    return filter(photoArray, paths)
  } else {
    return photoArray
  }
}
