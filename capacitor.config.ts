import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kronario',
  appName: 'Kronario',
  webDir: 'public',
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
      backgroundColor: "#ffffff",
      androidSplashResourceName: "@/components/molecules/splash_screen.tsx",
      showSpinner: false,
      iosSplashResourceName: "@/components/molecules/splash_screen.tsx",
      splashFullScreen: false
    }
  }
};

export default config;
