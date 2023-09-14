import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import CloudTools from 'views/dashboard/cloud-tools/CloudTools';
// import { SignalWifi3Bar } from '@mui/icons-material'; //not included
import S3 from 'views/dashboard/cloud-tools/S3';
import Ebs from 'views/dashboard/cloud-tools/Ebs';
import Lambda from 'views/dashboard/cloud-tools/Lambda';
import Ec2 from 'views/dashboard/cloud-tools/Ec2';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          //changed 'default' into awstools
          path: 'default',
          // path: 'awstools',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-color',
          element: <UtilsColor />
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'tabler-icons',
          element: <UtilsTablerIcons />
        }
      ]
    },
    {
      path: 'icons',
      children: [
        {
          path: 'material-icons',
          element: <UtilsMaterialIcons />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    },
    {
      path: 'cloudtools',
      element: <CloudTools />
    },
    {
      path: 's3',
      element: <S3 />
    },
    {
      path: 'ebs',
      element: <Ebs />
    },
    {
      path: 'lamda',
      element: <Lambda />
    },
    {
      path: 'ec2',
      element: <Ec2 />
    }
  ]
};

export default MainRoutes;
