import "quasar/dist/quasar.min.css";
import { Quasar } from "quasar";

const div = {
    functional: true,
    render: (h, { data, children, ...args }) => {
        return h(
            children[0] ? children[0].tag : "",
            (children[0] || {}).data,
            children[0] ? children[0].children : null
        );
    },
};

export const extensions = {
    plugins: [Quasar],
    components: {
        transition: div,
        "transition-stub": div,
    },
    mixins: [],
};
