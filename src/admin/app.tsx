export default {
  config: {
    locales: ['en', 'ar'],
    head: {
      favicon: '/extensions/favicon.png',
    },
    auth: {
      logo: '/extensions/logo.png',
      background: '#f8fafc',
      message: 'Welcome to Apex ISC Admin Dashboard — Manage your content securely.',
    },
    menu: {
      logo: '/extensions/logo.png',
    },
    theme: {
      light: {
        colors: {
          primary100: '#d9e6f2',
          primary500: '#1a609e',
          primary600: '#155c8f',
          primary700: '#114b75',
        },
      },
    },
    translations: {
      en: {
        'Auth.form.welcome.title': 'Welcome to Apex ISC',
        'Auth.form.welcome.subtitle': 'Login to manage your content.',
        'app.components.LeftMenu.navbrand.title': 'Apex ISC Dashboard',
      },
      ar: {
        'Auth.form.welcome.title': 'مرحبًا بك في Apex ISC',
        'Auth.form.welcome.subtitle': 'قم بتسجيل الدخول لإدارة المحتوى.',
        'app.components.LeftMenu.navbrand.title': 'لوحة تحكم Apex ISC',
      },
    },
    tutorials: false,
    notifications: { release: false },
  },

  bootstrap(app: any) {
    console.log('🚀 Apex ISC Admin Loaded Successfully');

    // ✅ أضف رابط الداشبورد المخصص
    app.addMenuLink({
      to: 'dashboard-apex-isc', // بدون /
      icon: () => <i className="fa fa-chart-line" />,
      intlLabel: {
        id: 'apex.dashboard.label',
        defaultMessage: 'Dashboard',
      },
      Component: () => import('./custom-pages/DashboardPage'),
      permissions: [],
    });

    // ✅ إعادة توجيه يدوية في حال كنت تريدها
    if (window.location.pathname === '/admin') {
      window.location.href = '/admin/dashboard-apex-isc';
    }
  },
};
