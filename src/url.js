const API_KEY = '36135739-b9df89b3b4d7783a74305e6f0'

const BASE_URL = 'https://pixabay.com/api/'

let numberPage = 1

export class JSONPlaceholderAPI {
    fetchPhotos(search){
        return fetch(`${BASE_URL}?q=${search}&key=${API_KEY}&image_type='photo'&orientation='horizontal'&safesearch='true'&per_page=40&page=${numberPage}`)
        .then((res)=> {
            if(!res.ok){
                console.log('error');
            }
    numberPage = numberPage + 1
    return res.json()
        })
    }
}


    





