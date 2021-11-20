export const convertNodeIdToCursor = (node: { id: any }) => {
    let nodeId = node.id;
    if (typeof(node.id) === 'number') {
        nodeId = node.id.toString();
    }
    return Buffer.from(nodeId, 'binary').toString('base64');
}

export const convertCursorToNodeId = (cursor: string) => {
    return Buffer.from(cursor, 'base64').toString('binary');
}

export const paginate = (first: number, afterCursor: string, data: any[]) => {
    if (!first) {
        //if without arguments, set first to 1
        first = 1;
    }
    let afterIndex = 0;
    if (!!afterCursor) {
        const nodeId = convertCursorToNodeId(afterCursor);
        const nodeIndex = data.findIndex((artist: any) => artist.id == nodeId);
        
        if (nodeIndex >= 0) {
            afterIndex = nodeIndex + 1;
        }
    }

    const sliced = data.slice(afterIndex, afterIndex + first);
    const edges = sliced.map((node: any) => ({
        cursor: convertNodeIdToCursor(node),
        node
    }));

    let startCursor, endCursor = null;
    if (edges.length > 0) {
        startCursor = convertNodeIdToCursor(edges[0].node);
        endCursor = convertNodeIdToCursor(edges[edges.length - 1].node);
    }

    let hasNextPage = data.length > afterIndex + first;

    return {
        totalCount: data.length,
        edges,
        pageInfo: {
            startCursor,
            endCursor,
            hasNextPage
        }
    }
}