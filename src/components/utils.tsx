 export interface GetImageUrlTpye {
    person: {
        name?: string;
        imageId: string;
    };
    size: string | number;
}

 export function getImageUrl({person, size = 's'}: GetImageUrlTpye) {
    return (
        'https://i.imgur.com/' + person.imageId + size + '.jpg'
    )
}

