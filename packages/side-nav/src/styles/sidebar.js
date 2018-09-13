import { css } from 'emotion';
import facepaint from 'facepaint';

const breakpoints = [1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const sidebar = css`
  position: relative;
  z-index: 1;

  & a {
    color: var(--sidebarTextColor);
    display: block;
    text-decoration: none;
  }

  .content {
    background: var(--sidebarBgColor);
    color: var(--sidebarTextColor);
    font-family: var(--firstFontFamily);
    padding-top: var(--barHeight);
    position: fixed;
    left: 0;
    top: 0;
    transition: transform 0.5s;
    bottom: 0;

    ${mq({
      transform: ['translateX(-100%)', 'translateX(0)'],
      width: ['var(--mobileSidebarWidth)', 'var(--desktopSidebarWidth)'],
    })};

    &.toggled {
      transform: translateX(0);
    }
  }

  .filterBar {
    background: var(--sidebarBarBgColor);
    display: flex;
    left: 0;
    width: 100%;
    height: var(--barHeight);
    z-index: 2;
    position: absolute;

    ${mq({
      position: ['fixed', 'absolute'],
      top: ['auto', 0],
      bottom: [0, 'auto'],
    })};

    .branding {
      flex-direction: column;
      flex-grow: 1;
      padding: 0 0 0 20px;
      justify-content: center;

      ${mq({
        display: ['none', 'flex'],
      })};

      h3 {
        font-size: 1.1em;
        line-height: 1;
        margin-top: -1px;
      }

      p {
        font-size: 0.8em;
        font-weight: 300;
        line-height: 1;
        opacity: 0.8;
        margin-top: 3px;
        color: var(--sidebarTextColor);
      }
    }

    .tip {
      display: flex;
      flex-grow: 1;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 1.2em;
        font-weight: 300;
      }

      ${mq({
        display: ['flex', 'none'],
      })};
    }

    .switchers {
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
    }
  }

  .mobileBar {
    position: fixed;
    width: 100%;
    background: red;
    left: 0;
    height: var(--barHeight);
    transition: all var(--transitionTime);

    ${mq({
      bottom: [0, 'calc(var(--barHeight) * -1)'],
    })};

    &.toggled {
      transform: translateX(calc(100% - 60px));
    }
  }

  .appliedFilters {
    padding: 20px;
    background: black;
  }

  .list {
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    bottom: 0;
    left: 0;
    width: 100%;
    transition: var(--transitionTime);
    position: absolute;

    ${mq({
      top: [0, 'var(--barHeight)'],
      bottom: ['var(--barHeight)', 0],
    })};

    & ul {
      list-style: none;
      font-size: 1.1em;
      line-height: 1.3;
    }

    & li {
      background: var(--sidebarBgColor);
      border-bottom: 1px solid var(--sidebarLineColor);
      position: relative;

      & a {
        padding: var(--spaceL) calc(var(--spaceXL) + var(--spaceS))
          var(--spaceL) var(--spaceXL);

        &:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          background: var(--accentColor);
          width: var(--spaceM);
          transform: translateX(-100%);
        }

        &.active {
          background: var(--sidebarActiveLinkBgColor);
          transform: translateX(var(--spaceM));
        }
      }

      & small {
        align-items: center;
        display: flex;
        font-size: 0.7em;
        opacity: 0.9;
        margin: var(--spaceM) 0 var(--spaceS);
      }

      & svg {
        width: 14px;
        height: 14px;
        margin-right: var(--spaceS);
      }

      @media (hover: hover) {
        & a:not(.active):hover {
          background: var(--sidebarLinkHoverBgColor);
          transform: translateX(var(--spaceXS));
        }
      }
    }
  }
`;

export default sidebar;
