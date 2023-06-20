import Header from "@/components/Header/Header";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

import { Providers } from "./GlobalRedux/provider";
import { ErrorBoundary } from "react-error-boundary";

import { Suspense } from "react";

import Error from "./global-error";
import Loading from "./loading";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const generalSettingsData = getGeneralSettings();
  const mobileMenuData = getMobileMenuData();
  const topBarData = getTopBarData();
  const navigationData = getNavigation();
  const navigationSettingsData = getNavigationSettings();

  const [generalSettings, mobileMenu, topbar, navigation, navigationSettings] =
    await Promise.all([
      generalSettingsData,
      mobileMenuData,
      topBarData,
      navigationData,
      navigationSettingsData,
    ]);

  return (
    <ErrorBoundary fallback={<Error />}>
      <html lang="pl">
        <head>
          <title>{generalSettings.name}</title>
          <meta name="description" content={generalSettings.description}></meta>
          <link
            rel="icon"
            type="image/png"
            href={generalSettings.site_icon_url}
          />
        </head>
        <body>
          <Providers>
            <Suspense fallback={<Loading />}>
              <Header
                mobileMenu={mobileMenu}
                topbar={topbar.json}
                logo={generalSettings.logo}
                navigation={navigation.items}
                navigationSettings={navigationSettings.acf}
              />
              {children}
              <Footer />
            </Suspense>
          </Providers>
        </body>
      </html>
    </ErrorBoundary>
  );
}
async function getGeneralSettings() {
  const res = await fetch("https://e-asante.pl/wp-json");

  return await res.json();
}

async function getMobileMenuData() {
  const res = await fetch(
    "https://e-asante.pl/wp-json/site-settings/v1/menu-mobile"
  );

  return await res.json();
}

async function getTopBarData() {
  const res = await fetch(
    "https://e-asante.pl/wp-json/site-settings/v1/topbar"
  );

  return await res.json();
}

async function getNavigation() {
  const res = await fetch("https://e-asante.pl/wp-json/menus/v1/menus/27");

  return await res.json();
}
async function getNavigationSettings() {
  const res = await fetch("https://e-asante.pl/wp-json/acf/v3/posts/47");

  return await res.json();
}
