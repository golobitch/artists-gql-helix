const mapDbArtistToJsObject = (artist: { ArtistId: any; Name: any; }) => ({
    id: artist.ArtistId,
    name: artist.Name
});

export const getArtists = async (ctx: { db: { all: (arg0: string) => any; }; }) => {
    const artists = await ctx.db.all('SELECT * FROM artists');
    return artists.map((artist: { ArtistId: any; Name: any; }) => mapDbArtistToJsObject(artist));
}

export const getArtist = async (ctx: { db: any; }, id: number) => {
    const artist = await ctx.db.get('SELECT * FROM artists WHERE ArtistId = ?', id);
    return mapDbArtistToJsObject(artist);
}

export const updateArtist = async (ctx: { db: any; }, data: { id: number, name: string }): Promise<[number, {id: number, name: string}?]> => {
    const xs = await ctx.db.run(
        'UPDATE artists SET Name = ? WHERE ArtistId = ?',
        data.name,
        data.id,
    );

    const res: [number, {id: number, name: string}?] = [xs.changes];
    try {
        const artist = await getArtist(ctx, data.id);
        res.push(artist);
    }catch(err) {}
    return res;
}