import { getArtists } from "../../operations/artists-operations";
import { Artist } from "./artist-type";
import { paginate } from "../../operations/pagination-operations";
import { Page } from "../pagination/page-type";
import { PaginationArguments } from "../pagination/pagination-arguments";

export const ArtistQueries = {
    artists: {
        type: Page(Artist),
        args: PaginationArguments,
        resolve: async (_root: any, args: any, ctx: any ) => {
            const { first, afterCursor } = args;
            const artists = await getArtists(ctx);

            return paginate(first, afterCursor, artists);
        }
    }
}