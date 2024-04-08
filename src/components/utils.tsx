export interface Person {
	name: string;
	imageId: string;
}

export interface GetImageUrlTpye {
	person: Person;
	size: string | number;
}

export function getImageUrl({ person, size }: GetImageUrlTpye) {
	console.log(size);
	return 'https://i.imgur.com/' + person.imageId + '.jpg';
}
