import type { NextApiRequest } from 'next';

import handler from 'lib/api/handler';

const getUrl = (req: NextApiRequest) => {
  return `/account/v1/user/tags/address/${ req.query.id }`;
};

const addressEditHandler = handler(getUrl, [ 'DELETE', 'PUT' ]);

export default addressEditHandler;
