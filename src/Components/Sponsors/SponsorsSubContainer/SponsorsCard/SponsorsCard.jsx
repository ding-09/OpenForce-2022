import React from "react";
import "./SponsorsCard.css";

function SponsorsCard(props) {
    return (
        <div
            className="sponsors-card-cont"
            style={
                props.link.width
                    ? { width: props.link.width, height: props.link.height }
                    : {}
            }
        >
            <a
                href={props.link.website}
                className="sponsors-card"
                target="_blank"
                style={
                    props.link.padding
                        ? { paddingBottom: props.link.padding }
                        : {}
                }
            >
                {props.link.tags ? (
                    <i
                        className="fas fa-info info"
                        title="For more info go to prize section"
                    ></i>
                ) : (
                    <></>
                )}
                {props.link.logoSize ? (
                    <img
                        className="sponsors-img"
                        src={props.link.logo}
                        alt=""
                        style={{ width: props.link.logoSize }}
                    />
                ) : (
                    <img
                        className="sponsors-img"
                        src={props.link.logo}
                        alt=""
                    />
                )}
                {props.link.name ? (
                    <div
                        className="sponsor-name"
                        style={
                            props.link.fontSize
                                ? { fontSize: props.link.fontSize }
                                : {}
                        }
                    >
                        {props.link.name}
                    </div>
                ) : (
                    <></>
                )}
                {props.link.desc?<div className="sponsor-desc">{props.link.desc}</div>:<></>}
                {props.link.tags ? (
                    <div className="tags">
                        {props.link.tags ? (
                            props.link.tags.map((elem) => {
                                return (
                                    <span className="badge" key={elem}>
                                        {elem}
                                    </span>
                                );
                            })
                        ) : (
                            <></>
                        )}
                    </div>
                ) : (
                    <></>
                )}
            </a>
        </div>
    );
}

export default SponsorsCard;
