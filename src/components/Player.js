import React, { PureComponent } from 'react';
import { Consumer } from './Context';
import PropTypes from 'prop-types';
import Counter from './Counter';

class Player extends PureComponent {
    static propTypes = {
        index: PropTypes.number.isRequired
    };

    render() {
        const { index } = this.props;
        return (
            <Consumer>
                {({ actions, players }) => (
                    <div className="player">
                        <span className="player-name">
                            <button
                                className="remove-player"
                                onClick={() =>
                                    actions.removePlayer(players[index].id)
                                }
                            >
                                ✖
                            </button>
                            {players[index].name}
                        </span>

                        <Counter index={index} />
                    </div>
                )}
            </Consumer>
        );
    }
}

export default Player;
