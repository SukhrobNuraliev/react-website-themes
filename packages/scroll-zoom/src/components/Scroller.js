import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/scroller';
import Screen from './Screen';

class Scroller extends React.Component {
  state = {
    numberOfScreens: this.props.screens.length,
    scrollPosition: 0,
    containerHeight: 0,
  };

  container = React.createRef();
  screens = {};

  componentDidMount() {
    window.scrollTo(0, 1);
    this.setState({ containerHeight: this.container.current.offsetHeight });
    window.addEventListener('scroll', this.updateScrollPositon);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.updateScrollPositon);
  }

  updateScrollPositon = () => {
    const { containerHeight, numberOfScreens } = this.state;

    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const documentHeight = document.body.offsetHeight;

    const scaleToFull =
      (Math.sqrt(Math.pow(windowWidth, 2) + Math.pow(windowHeight, 2)) / 150) *
      2;

    const scaleToFull2 = windowHeight / 150 + 1;

    console.log(scaleToFull, scaleToFull2);

    const scrolledHeight = window.scrollY;

    const scrolledScreens = scrolledHeight / windowHeight;
    const activeScreenId = Math.floor(scrolledScreens) + 1;
    const activeScreenScale = scrolledScreens % 1;

    for (let screen of Object.values(this.screens)) {
      screen.current.scaleScreen(
        activeScreenId,
        activeScreenScale,
        scaleToFull
      );
    }
  };

  render() {
    const { screens, themeStyle = style, customStyle = '' } = this.props;

    return (
      <main className={cx(themeStyle, customStyle)} ref={this.container}>
        {screens.map((item, idx) => {
          const { id, headline, text, background } = item;
          this.screens[id] = React.createRef();

          return (
            <Screen
              key={id}
              id={id}
              background={background}
              ref={this.screens[id]}
            >
              <h2>{headline}</h2>
              <p>{text}</p>
            </Screen>
          );
        })}
      </main>
    );
  }
}

Scroller.propTypes = {
  screens: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Scroller;
