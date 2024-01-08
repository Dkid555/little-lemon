export default function Menu(){

    return(
        <ul>
            <div id="itemsMENU">
                <div className="item_menu">
                    <div className="menuitem" style={{display: "flex"}}>
                        <img className="imagesMenu" width={"300px"} height="200px" src='/images/MisoPesto.jpg'
                             alt="Miso Pesto Pasta"/>
                        <div className="description">
                            <h1>Miso Pesto Pasta</h1>
                            <article>
                                <p style={{textAlign: "left", paddingLeft: "10px"}}>
                                    Miso Pesto Pasta at Little Lemon is a tantalizing fusion of East Asian and Italian
                                    flavors,
                                    combining al dente pasta with a rich miso-infused pesto sauce. The dish harmoniously
                                    marries
                                    the umami depth of miso with the classic freshness of basil, creating a savory symphony
                                    that delights the palate.
                                    Each forkful unveils a unique blend of textures and tastes, offering a culinary journey
                                    that
                                    captures the essence of our cross-cultural culinary philosophy.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;
                <div className="item_menu">
                    <div className="menuitem" style={{display: "flex"}}>
                        <img className="imagesMenu" width={"300px"} height="200px" src='/images/SoyGlazed.jpg'
                             alt="Soy-Glazed Balsamic Chicken"/>
                        <div className="description">
                            <h1>Soy-Glazed Balsamic Chicken</h1>
                            <article>
                                <p style={{textAlign: "left", paddingLeft: "10px"}}>
                                    The Soy-Glazed Balsamic Chicken at Little Lemon is a culinary masterpiece that elevates
                                    the classic with a delightful fusion of East Asian and Italian influences. Succulent chicken
                                    is meticulously glazed with a sweet and savory blend of soy and balsamic, creating a perfect
                                    balance of flavors.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </ul>
    );
}