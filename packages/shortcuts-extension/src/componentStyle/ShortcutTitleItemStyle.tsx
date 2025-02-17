/*
 * Copyright (c) Jupyter Development Team.
 * Distributed under the terms of the Modified BSD License.
 */

import { style } from 'typestyle';

export const HeaderStyle = style({
  display: 'flex',

  $nest: {
    '&:hover .jp-ShortcutTitleItem-sortButton': {
      fontWeight: 600,
      color: 'var(--jp-ui-font-color0)'
    },
    '&:focus .jp-ShortcutTitleItem-sortButton': {
      outline: 'none'
    },
    '&:active .jp-ShortcutTitleItem-sortButton': {
      fontWeight: 600,
      color: 'var(--jp-ui-font-color0)'
    }
  }
});

export const CurrentHeaderStyle = style({
  $nest: {
    '& div': {
      color: 'var(--jp-ui-font-color0)',
      fontWeight: 'bold'
    }
  }
});

export const SortButtonStyle = style({
  transform: 'rotate(180deg)',
  marginLeft: '10px',
  color: 'var(--jp-ui-font-color2)',
  border: 'none',
  backgroundColor: 'var(--jp-layout-color0)',
  fontSize: 'var(--jp-ui-font-size1)'
});
