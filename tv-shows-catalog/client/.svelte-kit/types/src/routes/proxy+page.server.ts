// @ts-nocheck
import { API_BASE_URL } from '$env/static/private';
import type { TvShowSummary } from '$lib/types/tv-show-summary.interface';
import type { PageServerLoad } from './$types';

export const load = async ({ fetch }: Parameters<PageServerLoad>[0]) => {
	const response = await fetch(`${API_BASE_URL}/tv-shows`);
	const tvShows: TvShowSummary[] = await response.json();

	return {
		tvShows: tvShows.sort((a, b) => b.rating.average - a.rating.average)
	};
};
