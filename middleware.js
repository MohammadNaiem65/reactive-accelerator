import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

const supportedLocales = ["en", "bn"];
const defaultLocale = "en";

function getLocale(request) {
  // const userAcceptedLanguages = request.headers.get("accept-language");
  // const headers = {
  //   "accept-language": userAcceptedLanguages,
  // };
  const headers = Object.fromEntries(request.headers.entries());

  const acceptedLanguages = new Negotiator({ headers }).languages();

  return match(acceptedLanguages, supportedLocales, defaultLocale);
}

export function middleware(request) {
  // Check if the user is in any supported locale
  const pathname = request.nextUrl.pathname;

  const isMissingLocale = !supportedLocales.some(
    (locale) =>
      pathname.startsWith(`/${locale}`) || pathname.startsWith(`/${locale}/`)
  );

  // Redirect if there is no locale
  if (isMissingLocale) {
    const locale = getLocale(request);

    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, assets, api)
    "/((?!api|assets|.*\\..*|_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
