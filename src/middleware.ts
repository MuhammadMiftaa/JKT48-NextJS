import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./middlewares/withAuth";

export function mainMiddleware(req: NextRequest) {
  const res = NextResponse.next();
  return res;
  // return NextResponse.redirect(new URL("/", req.url));
}

export default withAuth(mainMiddleware, ["/profile", "/discography/single-original"]);
// export const config = {
//     matcher: ["/shop", "/theater"]
// }
