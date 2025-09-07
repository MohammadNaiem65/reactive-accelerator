import { Hotel } from '@/models/hotel-model';
import { replaceIdInArray } from '@/utils/mongo';

export async function getHotels() {
    const res = await Hotel.find().lean();

    return replaceIdInArray(res);
}
