import * as Colors from '@mui/material/colors';
import orangeThemeboy from './assets/orangeImages/svg/orangeTheme-boy.svg'
import contactsOrange from './assets/orangeImages/svg/contactsOrange.svg'
import eduOrange from './assets/orangeImages/svg/eduOrange.svg'
import expOrange from './assets/orangeImages/svg/expOrange.svg'

export const orangeThemeLight = {
  type: 'light',
  primary: '#f56539',
  primary400: '#ff764d',
  primary600: '#fa5624',
  primary80: '#f56539cc',
  primary50: '#f5653980',
  primary30: '#f565394d',
  secondary: '#eaeaea',
  secondary70: '#eaeaeab3',
  secondary50: '#eaeaea80',
  tertiary: '#212121',
  tertiary80: '#212121cc',
  tertiary70: '#212121b3',
  tertiary50: '#21212180',
  aboutimg: orangeThemeboy,
  eduimg: eduOrange,
  expimg: expOrange,
  contactsimg: contactsOrange
}
export const orangeThemeDark = {
  type: 'dark',
  primary: '#f56539',
  primary400: '#ff764d',
  primary600: '#fa5624',
  primary80: '#f56539cc',
  primary50: '#f5653980',
  primary30: '#f565394d',
  secondary: '#212121',
  secondary70: '#212121b3',
  secondary50: '#21212180',
  tertiary: '#eaeaea',
  tertiary80: '#eaeaeacc',
  tertiary70: '#eaeaeab3',
  tertiary50: '#eaeaea80',
  aboutimg: orangeThemeboy,
  eduimg: eduOrange,
  expimg: expOrange,
  contactsimg: contactsOrange
}

  
// export const lightTheme = createTheme({
//     palette: {
//       mode: 'light',
//       primary: {
//         main: Colors.amber[900],
//         contrastText: Colors.amber[50]
//       },
//       secondary: {
//         main: Colors.amber[300],
//         contrastText: Colors.green[300]
//       },
//       text: {
//         primary: Colors.amber[50],
//         secondary: Colors.grey[800],
//       },
      
//       divider: Colors.amber[200],
//       background: {
//         paper: Colors.amber[200],
//         default: Colors.amber[100]
//       },
//       status: {
//         danger: Colors.orange
//       },
//     },
//     components: {
//       MuiButton: {
//         styleOverrides: {
//           root: {
//             color: Colors.amber[50]
//           }
//         }
//       },
//       MuiBottomNavigation: {
//         styleOverrides: {
//           root: {
//             bottom: "0px",
//             position: "fixed",
//             width: "100%",
//             display: "flex",
//             flexDirection: "row",
//             justifyContent: 'space-between',
//             backgroundColor: Colors.amber[900]
//           }
//         }
//       }
//     }
//   });
  
// export const darkTheme = createTheme({
//     palette: {
//         mode: 'dark',
//         primary: {
//           main: '#000000',
//           light: '#ffffff',
//           dark: '#000000',
//         },
//         secondary: {
//           main: '#f50057',
//         },
//     },
//   });