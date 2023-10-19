export interface Person {
    name?: string;
    imageId: string;

}

export interface GetImageUrlTpye {
    person: Person;
    size: string | number;
}

 export function getImageUrl({person, size = 's'}: GetImageUrlTpye) {
    return (
        'https://i.imgur.com/' + person.imageId + size + '.jpg'
    )
}

