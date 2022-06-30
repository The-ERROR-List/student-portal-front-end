import './item.scss';
export default function ItemDash() {

    return (
        <>
            <section class="wrapper">
                <div class="row card_row">

                    <h1 style={{ marginLeft: "30px" }} class="column h6 color_label"> Categories</h1>
                    <div class="column half_whole">
                        <article class="card box_panel">

                            <label class="card_label">
                                Dashboard Item
                            </label>
                            <section class="card_body">
                                <div class="graph">
                                    <div class="knob_data" style={{ marginRight: "25px" }}>89<span class="txt_smaller">%</span></div>
                                    <svg class="graph_media" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 266.4 266.4">
                                        <g>
                                            <path class="st0" d="M130.5,32.2V0c-53.3,1.1-99,33.5-119.3,79.6l30,11.8C56.7,57.3,90.7,33.3,130.5,32.2z" />
                                            <path class="st1" d="M133.2,0c-0.9,0-1.8,0-2.7,0v32.2c0.9,0,1.8,0,2.7,0c55.8,0,101,45.2,101,101s-45.2,101-101,101
                  s-101-45.2-101-101c0-14.9,3.2-29,9-41.7l-30-11.8C4,96,0,114.1,0,133.2c0,73.6,59.6,133.2,133.2,133.2s133.2-59.6,133.2-133.2
                  S206.7,0,133.2,0z"/>
                                        </g>
                                    </svg>
                                </div>
                            </section>
                            <section class="stats stats_row">
                                <div class="stats_item half_whole small_whole">
                                    <div class="txt_faded">
                                        <label class="txt_label space_n_b">
                                            Goal
                                        </label>
                                        <div class="txt_serif stats_item_number txt_success">
                                            85<span class="txt_smaller">%</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="stats_item half_whole">
                                    <div class="txt_faded">
                                        <label class="txt_label space_n_b">
                                            Red Line
                                        </label>
                                        <div class="txt_serif stats_item_number txt_error">
                                            80<span class="txt_smaller">.2%</span>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                    <div class="column half_whole">
                        <article class="card box_panel">
                            <label class="card_label">
                                Dashboard Item
                            </label>
                            <section class="card_body">
                                <div class="graph">
                                    <div class="txt_warn graph_data txt_serif">25,000</div>
                                </div>
                            </section>
                            <section class="stats stats_row">
                                <div class="stats_item half_whole">
                                    <div class="txt_faded">
                                        <label class="txt_label space_n_b">
                                            Goal
                                        </label>
                                        <div class="txt_serif stats_item_number txt_success">
                                            29,000
                                        </div>
                                    </div>
                                </div>
                                <div class="stats_item half_whole">
                                    <div class="txt_faded">
                                        <label class="txt_label space_n_b">
                                            Red Line
                                        </label>
                                        <div class="txt_serif stats_item_number txt_error">
                                            22,000
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </article>
                    </div>
                </div>
            </section>

        </>
    )
}


