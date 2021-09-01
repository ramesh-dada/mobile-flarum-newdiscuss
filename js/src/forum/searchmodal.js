import Modal from 'flarum/common/components/Modal';
import ItemList from 'flarum/utils/ItemList';
import Search from 'flarum/components/Search';

export default class searchmodal extends Modal {
    static isDismissible = true;

    className() {
        return 'searchmodal';
    }
    title() {
        // Content to show in the modal's title bar
        return <p>What are you looking for?</p>;
    }

    content() {
        // Content to show in the modal's body
        return (
            <div className="Modal-body">
                <div className="searchbar">
                    {this.fields().toArray()}
                </div>
            </div>
        );
    }
    fields() {
        const items = new ItemList();
        items.add('search', Search.component({
            state: app.search,
        }), -100);
        return items;
    }
}