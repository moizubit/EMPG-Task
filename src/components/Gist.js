import GistList from "./GistList"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGistForUser, getPublicGists } from "../store/actions/gist.action";
import Loader from "./loader/Loader";

const Gist = () => {

    const dispatch = useDispatch();
    const reduxState = useSelector(({ gist }) => {
        return {
            data: gist.gist,
            gistLoading: gist.gistLoading,
        };
    });
    const { data, gistLoading } = reduxState;
    return (
        <>
            {!gistLoading ? <GistList data={data} /> : <Loader />}
        </>
    )
}

export default Gist
