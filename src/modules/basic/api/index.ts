import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../../common/api';
import {IMember} from '../interfaces';
import {PaginationType} from '../../../common/types';

export interface IFindAllMembersRes {
    meta: PaginationType,
    items: IMember[];
}

export const memberApi = createApi({
    reducerPath: 'memberApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        findAllMembers: builder.query<IFindAllMembersRes, { page: number }>({
            query: ({page}: { page: number }) => ({
                url: `data?page=${page}&perPage=50`
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