import { serialize } from "cookie";

export default (req, res) => {
  const teste = {maxAge: -1, path: '/'};
  res.setHeader('Set-Cookie', [
    serialize('level', '', teste),
    serialize('currentExperience', '', teste),
    serialize('challengesCompleted', '', teste),
    serialize('access_token', '', teste),
    serialize('name', '', teste),
    serialize('username', '', teste),
  ]);

  res.writeHead(302, {Location: '/login'});
  return res.end();
}