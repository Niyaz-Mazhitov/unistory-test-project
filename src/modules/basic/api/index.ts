import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../../common/api';
import {IPerson} from '../interfaces';

interface IFindAllMembersRes {
    meta: { currentPage: number; perPage: number; totalPages: number },
    items: IPerson[];
}

export const memberApi = createApi({
    reducerPath: 'memberApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        findAllMembers: builder.query<IFindAllMembersRes, string>({
            query: () => ({
                url: 'data'
            })
        })
    })
});

export const {useFindAllMembersQuery} = memberApi;