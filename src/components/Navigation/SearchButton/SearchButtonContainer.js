import React from 'react';
import * as axios from 'axios';
import { connect } from 'react-redux';
import SearchButton from "./SearchButton";
import { setNotes } from '../../../redux/notes-reducer';
import { settings } from '../../../settings';

class SearchButtonContainer extends React.Component {

    filterNotes = (filterHashtag) => {
        if (filterHashtag == '#') {
            axios.get(settings.notesUrl)
            .then(response => {
                this.props.setNotes(response.data.notes);
            });
        } else {
            let filterNotes = this.props.notes.filter(function (note) {
                if (note.hashtags.indexOf(filterHashtag) !== -1) {
                    return note;
                }
            })
            this.props.setNotes(filterNotes);
        }
    }

    render() {
        return <SearchButton filterNotes={this.filterNotes} />
    }
}

let mapStateToProps = (state) => {
    return {
        notes: state.notesPage.notes
    }
}

export default connect(mapStateToProps, { setNotes })(SearchButtonContainer);