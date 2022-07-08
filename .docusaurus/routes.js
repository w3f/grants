
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/grants/',
    component: ComponentCreator('/grants/','ba4'),
    exact: true
  },
  {
    path: '/grants/__docusaurus/debug',
    component: ComponentCreator('/grants/__docusaurus/debug','12a'),
    exact: true
  },
  {
    path: '/grants/__docusaurus/debug/config',
    component: ComponentCreator('/grants/__docusaurus/debug/config','dd2'),
    exact: true
  },
  {
    path: '/grants/__docusaurus/debug/content',
    component: ComponentCreator('/grants/__docusaurus/debug/content','5e0'),
    exact: true
  },
  {
    path: '/grants/__docusaurus/debug/globalData',
    component: ComponentCreator('/grants/__docusaurus/debug/globalData','19c'),
    exact: true
  },
  {
    path: '/grants/__docusaurus/debug/metadata',
    component: ComponentCreator('/grants/__docusaurus/debug/metadata','7e5'),
    exact: true
  },
  {
    path: '/grants/__docusaurus/debug/registry',
    component: ComponentCreator('/grants/__docusaurus/debug/registry','ac3'),
    exact: true
  },
  {
    path: '/grants/__docusaurus/debug/routes',
    component: ComponentCreator('/grants/__docusaurus/debug/routes','13c'),
    exact: true
  },
  {
    path: '/grants/blog',
    component: ComponentCreator('/grants/blog','c22'),
    exact: true
  },
  {
    path: '/grants/blog/Polkadot MOOC',
    component: ComponentCreator('/grants/blog/Polkadot MOOC','17a'),
    exact: true
  },
  {
    path: '/grants/blog/tags',
    component: ComponentCreator('/grants/blog/tags','7c3'),
    exact: true
  },
  {
    path: '/grants/blog/tags/mooc',
    component: ComponentCreator('/grants/blog/tags/mooc','063'),
    exact: true
  },
  {
    path: '/grants/blog/tags/polkadot',
    component: ComponentCreator('/grants/blog/tags/polkadot','398'),
    exact: true
  },
  {
    path: '/grants/docs',
    component: ComponentCreator('/grants/docs','285'),
    routes: [
      {
        path: '/grants/docs/intro',
        component: ComponentCreator('/grants/docs/intro','e80'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];