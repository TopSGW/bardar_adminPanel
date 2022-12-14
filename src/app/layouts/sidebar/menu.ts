import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
    {
        id: 111,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 112,
        label: 'Home',
        icon: 'bx-home-circle',
        link: '/dashboard'

    },
    {
        id: 113,
        label: 'System Info',
        icon: 'bx-file',
        link: '/form/layouts'

    },
    {
        id: 114,
        label: 'System Setting',
        icon: 'bx-cog',
        subItems: [
            {
                id: 1141,
                label: 'Item Groups',
                link: '/settings/itemsgroups',
                parentId: 114
            },
            {
                id: 1141,
                label: 'Item Categories',
                link: '/settings/itemcategories',
                parentId: 114
            },
            {
                id: 1141,
                label: 'Kenf Categories',
                link: '/settings/kenfcategories',
                parentId: 114
            },
            {
                id: 1141,
                label: 'Shipping',
                link: '/settings/shipping',
                parentId: 114
            },
            {
                id: 1142,
                label: 'Units',
                link: '/settings/units',
                parentId: 114
            },
            {
                id: 1143,
                label: 'Purity (Karats)',
                link: '/settings/karats',
                parentId: 114
            },
            {
                id: 1143,
                label: 'Size of Rings',
                link: '/settings/sizes',
                parentId: 114
            },
            {
                id: 1146,
                label: 'Payment methods',
                link: '/settings/paymentmethod',
                parentId: 114
            },
            {
                id: 1147,
                label: 'Order Status',
                link: '/settings/orderstatus',
                parentId: 114
            },
            {
                id: 1148,
                label: 'Privacy Policy',
                link: '/ecommerce/privacypolicy',
                parentId: 114
            },
            {
                id: 1149,
                label: 'Terms And Condition',
                link: '/ecommerce/terms',
                parentId: 114
            }
        ]
    },
    {
        id: 115,
        label: 'Market Setting',
        icon: 'bx-shopping-bag',
        subItems: [
            {
                id: 1151,
                label: 'Market Categories',
                link: '/settings/marketcategories',
                parentId: 115
            },
            {
                id: 1152,
                label: 'Offers',
                link: '/settings/offers',
                parentId: 115
            },
            {
                id: 1153,
                label: 'Coupons',
                link: '/settings/coupons',
                parentId: 115
            },
        ]
    },
    {
        id: 116,
        label: 'System Users',
        icon: 'bx-user',
        subItems: [
            {
                id: 1161,
                label: 'Users Groups',
                link: '/settings/usergroups',
                parentId: 116
            },
            {
                id: 1162,
                label: 'Add User',
                link: '/form/adduser',
                parentId: 116
            },
            {
                id: 1163,
                label: 'All Users',
                link: '/contacts/list',
                parentId: 116
            },
        ]
    },
    {
        id: 129,
        label: 'Notifications',
        icon: 'bx-send',
        subItems: [
            {
                id: 1291,
                label: 'Clients notication',
                link: '',
                parentId: 129
            },
            {
                id: 1292,
                label: 'Shops notifcation',
                link: '',
                parentId: 129
            },
        ]
    },

    {
        id: 129,
        label: 'Sellers',
        isTitle: true
    },
    {
        id: 130,
        label: 'Add Seller',
        icon: 'bx-id-card',
        link: 'sellers/add',
    },
    {
        id: 131,
        label: 'Sellers List',
        icon: 'bx-group',
        link: 'sellers/list',

    },

    {
        id: 117,
        label: 'Shops',
        isTitle: true
    },
    {
        id: 118,
        label: 'Add Shop',
        icon: 'bx-add-to-queue',
        link: 'shops/add',
    },
    {
        id: 119,
        label: 'List Shops',
        icon: 'bx-list-ul',
        link: 'shops/list',

    },
    {
        id: 120,
        label: 'Products',
        isTitle: true
    },
    {
        id: 121,
        label: 'Add Products',
        icon: 'bx-add-to-queue',
        link: '/products/add',
    },
    {
        id: 122,
        label: 'All Products',
        icon: 'bx-list-ol',
        link: '/products/list',
    },
    {
        id: 123,
        label: 'Barcode Search',
        icon: 'bx-barcode',
        link: '/products/barcode',
    },
    {
        id: 124,
        label: 'Customers',
        isTitle: true
    },
    {
        id: 125,
        label: 'Customers',
        icon: 'bx-group',
        link: '/customers/list',
    },
    {
        id: 126,
        label: 'Orders',
        icon: 'bx-list-ul',
        link: '/customers/orders',
    },
    {
        id: 127,
        label: 'Invoices',
        icon: 'bx-list-ul',
        link: '/invoices/list',
    },
    {
        id: 127,
        label: 'Complaints',
        icon: 'bx-list-ul',
        link: '/complaints/list',
    },
    {
        id: 128,
        label: 'Reports',
        icon: 'bx-pie-chart-alt-2',
        subItems: [
            {
                id: 1281,
                label: 'Customers',
                link: '',
                parentId: 128
            },
            {
                id: 1282,
                label: 'Shops',
                link: '',
                parentId: 128
            },
            {
                id: 1283,
                label: 'Products',
                link: '',
                parentId: 128
            },
            {
                id: 1284,
                label: 'Invoices',
                link: '',
                parentId: 128
            },
            {
                id: 1284,
                label: 'Electronic Payments',
                link: '',
                parentId: 128
            },
        ]
    },
   /* {
        id: 12,
        label: 'MENUITEMS.ECOMMERCE.TEXT',
        icon: 'bx-store',
        subItems: [
            {
                id: 13,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                link: '/ecommerce/products',
                parentId: 12
            },
            {
                id: 14,
                label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                link: '/ecommerce/product-detail/1',
                parentId: 12
            },
            {
                id: 15,
                label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                link: '/ecommerce/orders',
                parentId: 12
            },
            {
                id: 16,
                label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                link: '/ecommerce/customers',
                parentId: 12
            },
            {
                id: 17,
                label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                link: '/ecommerce/cart',
                parentId: 12
            },
            {
                id: 18,
                label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                link: '/ecommerce/checkout',
                parentId: 12
            },
            {
                id: 19,
                label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                link: '/ecommerce/shops',
                parentId: 12
            },
            {
                id: 20,
                label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                link: '/ecommerce/add-product',
                parentId: 12
            },
        ]
    },
    {
        id: 21,
        label: 'MENUITEMS.CRYPTO.TEXT',
        icon: 'bx-bitcoin',
        subItems: [
            {
                id: 22,
                label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                link: '/crypto/wallet',
                parentId: 21
            },
            {
                id: 23,
                label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                link: '/crypto/buy-sell',
                parentId: 21
            },
            {
                id: 24,
                label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                link: '/crypto/exchange',
                parentId: 21
            },
            {
                id: 25,
                label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                link: '/crypto/lending',
                parentId: 21
            },
            {
                id: 26,
                label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                link: '/crypto/orders',
                parentId: 21
            },
            {
                id: 27,
                label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                link: '/crypto/kyc-application',
                parentId: 21
            },
            {
                id: 28,
                label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                link: '/crypto-ico-landing',
                parentId: 21
            }
        ]
    },
    {
        id: 29,
        label: 'MENUITEMS.EMAIL.TEXT',
        icon: 'bx-envelope',
        subItems: [
            {
                id: 30,
                label: 'MENUITEMS.EMAIL.LIST.INBOX',
                link: '/email/inbox',
                parentId: 29
            },
            {
                id: 31,
                label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                link: '/email/read/1',
                parentId: 29
            },
            {
                id: 32,
                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                badge: {
                    variant: 'success',
                    text: 'MENUITEMS.EMAIL.LIST.TEMPLATE.BADGE',
                },
                parentId: 29,
                subItems: [
                    {
                        id:33 ,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                        link: '/email/basic',
                        parentId:32
                    },
                    {
                        id:34 ,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                        link: '/email/alert',
                        parentId:32
                    },
                    {
                        id:35 ,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                        link: '/email/billing',
                        parentId:32
                    }
                ]
            }
        ]
    },
    {
        id: 36,
        label: 'MENUITEMS.INVOICES.TEXT',
        icon: 'bx-receipt',
        subItems: [
            {
                id: 37,
                label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                link: '/invoices/list',
                parentId: 36
            },
            {
                id: 38,
                label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                link: '/invoices/detail',
                parentId: 36
            },
        ]
    },
    {
        id: 39,
        label: 'MENUITEMS.PROJECTS.TEXT',
        icon: 'bx-briefcase-alt-2',
        subItems: [
            {
                id: 40,
                label: 'MENUITEMS.PROJECTS.LIST.GRID',
                link: '/projects/grid',
                parentId: 38
            },
            {
                id: 41,
                label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                link: '/projects/list',
                parentId: 38
            },
            {
                id: 42,
                label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                link: '/projects/overview',
                parentId: 38
            },
            {
                id: 43,
                label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                link: '/projects/create',
                parentId: 38
            }
        ]
    },
    {
        id: 44,
        label: 'MENUITEMS.TASKS.TEXT',
        icon: 'bx-task',
        subItems: [
            {
                id: 45,
                label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                link: '/tasks/list',
                parentId: 44
            },
            {
                id: 46,
                label: 'MENUITEMS.TASKS.LIST.KANBAN',
                link: '/tasks/kanban',
                parentId: 44
            },
            {
                id: 47,
                label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                link: '/tasks/create',
                parentId: 44
            }
        ]
    },
    {
        id: 48,
        label: 'MENUITEMS.CONTACTS.TEXT',
        icon: 'bxs-user-detail',
        subItems: [
            {
                id: 49,
                label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                link: '/contacts/grid',
                parentId: 48
            },
            {
                id: 50,
                label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                link: '/contacts/list',
                parentId: 48
            },
            {
                id: 51,
                label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                link: '/contacts/profile',
                parentId: 48
            }
        ]
    },
    {
        id: 52,
        label: 'MENUITEMS.BLOG.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 53,
                label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
                link: '/blog/list',
                parentId: 52
            },
            {
                id: 54,
                label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
                link: '/blog/grid',
                parentId: 52
            },
            {
                id: 55,
                label: 'MENUITEMS.BLOG.LIST.DETAIL',
                link: '/blog/detail',
                parentId: 52
            },
        ]
    },
    {
        id: 56,
        label: 'MENUITEMS.PAGES.TEXT',
        isTitle: true
    },
    {
        id: 57,
        label: 'MENUITEMS.AUTHENTICATION.TEXT',
        icon: 'bx-user-circle',
        badge: {
            variant: 'success',
            text: 'MENUITEMS.AUTHENTICATION.BADGE',
        },
        subItems: [
            {
                id: 58,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                link: '/pages/login-1',
                parentId: 57
            },
            {
                id: 59,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                link: '/pages/login-2',
                parentId: 57
            },
            {
                id: 60,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                link: '/pages/register-1',
                parentId: 57
            },
            {
                id: 61,
                label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                link: '/pages/register-2',
                parentId: 57
            },
            {
                id: 62,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                link: '/pages/recoverpwd-1',
                parentId: 57
            },
            {
                id: 63,
                label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                link: '/pages/recoverpwd-2',
                parentId: 57
            },
            {
                id: 64,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                link: '/pages/lock-screen-1',
                parentId: 57
            },
            {
                id: 65,
                label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                link: '/pages/lock-screen-2',
                parentId: 57
            },
            {
                id: 66,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                link: '/pages/confirm-mail',
                parentId: 57
            },
            {
                id: 67,
                label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                link: '/pages/confirm-mail-2',
                parentId: 57
            },
            {
                id: 68,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                link: '/pages/email-verification',
                parentId: 57
            },
            {
                id: 69,
                label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                link: '/pages/email-verification-2',
                parentId: 57
            },
            {
                id: 70,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                link: '/pages/two-step-verification',
                parentId: 57
            },
            {
                id: 71,
                label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                link: '/pages/two-step-verification-2',
                parentId: 57
            }
        ]
    },
    {
        id: 72,
        label: 'MENUITEMS.UTILITY.TEXT',
        icon: 'bx-file',
        subItems: [
            {
                id: 73,
                label: 'MENUITEMS.UTILITY.LIST.STARTER',
                link: '/pages/starter',
                parentId: 72
            },
            {
                id: 74,
                label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                link: '/pages/maintenance',
                parentId: 72
            },
            {
                id: 75,
                label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                link: '/pages/timeline',
                parentId: 72
            },
            {
                id: 76,
                label: 'MENUITEMS.UTILITY.LIST.FAQS',
                link: '/pages/faqs',
                parentId: 72
            },
            {
                id: 77,
                label: 'MENUITEMS.UTILITY.LIST.PRICING',
                link: '/pages/pricing',
                parentId: 72
            },
            {
                id: 78,
                label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                link: '/pages/404',
                parentId: 72
            },
            {
                id: 79,
                label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                link: '/pages/500',
                parentId: 72
            },
        ]
    },
    {
        id: 80,
        label: 'MENUITEMS.COMPONENTS.TEXT',
        isTitle: true
    },
    {
        id: 81,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        subItems: [
            {
                id: 82,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 81
            },
            {
                id: 83,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 81
            },
            {
                id: 84,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 81
            },
            {
                id: 85,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 81
            },
            {
                id: 86,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 81
            },
            {
                id: 87,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 81
            },
            {
                id: 88,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 81
            },
            {
                id: 89,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 81
            },
            {
                id: 90,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/ui/rangeslider',
                parentId: 81
            },
            {
                id: 91,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbar',
                parentId: 81
            },
            {
                id: 92,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/ui/sweet-alert',
                parentId: 81
            },
            {
                id: 93,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 81
            },
            {
                id: 94,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 81
            },
            {
                id: 95,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 81
            },
            {
                id: 96,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 81
            },
            {
                id: 97,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 81
            },
            {
                id: 98,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/ui/image-crop',
                parentId: 81
            },
        ]
    },
    {
        id: 99,
        label: 'MENUITEMS.FORMS.TEXT',
        icon: 'bxs-eraser',
        badge: {
            variant: 'danger',
            text: 'MENUITEMS.FORMS.BADGE',
        },
        subItems: [
            {
                id: 100,
                label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                link: '/form/elements',
                parentId: 99
            },
            {
                id: 101,
                label: 'MENUITEMS.FORMS.LIST.LAYOUTS',
                link: '/form/layouts',
                parentId: 99
            },
            {
                id: 102,
                label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                link: '/form/validation',
                parentId: 99
            },
            {
                id: 103,
                label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                link: '/form/advanced',
                parentId: 99
            },
            {
                id: 104,
                label: 'MENUITEMS.FORMS.LIST.EDITOR',
                link: '/form/editor',
                parentId: 99
            },
            {
                id: 105,
                label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                link: '/form/uploads',
                parentId: 99
            },
            {
                id: 106,
                label: 'MENUITEMS.FORMS.LIST.REPEATER',
                link: '/form/repeater',
                parentId: 99
            },
            {
                id: 107,
                label: 'MENUITEMS.FORMS.LIST.WIZARD',
                link: '/form/wizard',
                parentId: 99
            },
            {
                id: 108,
                label: 'MENUITEMS.FORMS.LIST.MASK',
                link: '/form/mask',
                parentId: 99
            }
        ]
    },
    {
        id: 109,
        icon: 'bx-list-ul',
        label: 'MENUITEMS.settings.TEXT',
        subItems: [
            {
                id: 110,
                label: 'MENUITEMS.settings.LIST.BASIC',
                link: '/settings/basic',
                parentId: 109
            },
            {
                id: 111,
                label: 'MENUITEMS.settings.LIST.ADVANCED',
                link: '/settings/advanced',
                parentId: 109
            }
        ]
    },
    {
        id: 112,
        icon: 'bxs-bar-chart-alt-2',
        label: 'MENUITEMS.CHARTS.TEXT',
        subItems: [
            {
                id: 113,
                label: 'MENUITEMS.CHARTS.LIST.APEX',
                link: '/charts/apex',
                parentId: 112
            },
            {
                id: 114,
                label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                link: '/charts/chartjs',
                parentId: 112
            },
            {
                id: 115,
                label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                link: '/charts/chartist',
                parentId: 112
            },
            {
                id: 116,
                label: 'MENUITEMS.CHARTS.LIST.ECHART',
                link: '/charts/echart',
                parentId: 112
            }
        ]
    },
    {
        id: 117,
        label: 'MENUITEMS.ICONS.TEXT',
        icon: 'bx-aperture',
        subItems: [
            {
                id: 118,
                label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                link: '/icons/boxicons',
                parentId: 117
            },
            {
                id: 119,
                label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                link: '/icons/materialdesign',
                parentId: 117
            },
            {
                id: 120,
                label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                link: '/icons/dripicons',
                parentId: 117
            },
            {
                id: 121,
                label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                link: '/icons/fontawesome',
                parentId: 117
            },
        ]
    },
    {
        id: 122,
        label: 'MENUITEMS.MAPS.TEXT',
        icon: 'bx-map',
        subItems: [
            {
                id: 123,
                label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                link: '/maps/google',
                parentId: 122
            }
        ]
    },
    {
        id: 124,
        label: 'MENUITEMS.MULTILEVEL.TEXT',
        icon: 'bx-share-alt',
        subItems: [
            {
                id: 125,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.1',
                link: 'javascript: void(0);',
                parentId: 124
            },
            {
                id: 126,
                label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.2',
                parentId: 124,
                subItems: [
                    {
                        id: 127,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.1',
                        link: 'javascript: void(0);',
                        parentId: 126,
                    },
                    {
                        id: 128,
                        label: 'MENUITEMS.MULTILEVEL.LIST.LEVEL1.LEVEL2.2',
                        link: 'javascript: void(0);',
                        parentId: 126,
                    }
                ]
            },
        ]
    }*/
];
