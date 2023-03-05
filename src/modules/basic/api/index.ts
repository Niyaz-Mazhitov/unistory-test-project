import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../../common/api';
import {IMember} from '../interfaces';

export interface IFindAllMembersRes {
    meta: { currentPage: number; perPage: number; totalPages: number },
    items: IMember[];
}

export const memberApi = createApi({
    reducerPath: 'memberApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        findAllMembers: builder.query<IFindAllMembersRes, string>({
            query: () => ({
                url: 'data'
            })
        }),

        findOneMember: builder.query<IMember, number>({
            query: (memberId: number) => ({
                url: `data/id/${memberId}`
            })
        })
    })
});

export const {useFindAllMembersQuery, useFindOneMemberQuery} = memberApi;