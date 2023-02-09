import { Octokit } from "@octokit/rest";
import { handleError } from "../../utils/methods";
import GIST from "../constants/gist.constant";

const octokit = new Octokit()

//API modified to get all the public gist list
export const getPublicGists = (payload, CB) => (dispatch) => {
    dispatch({ type: GIST.GET_GIST, loading: true })
    octokit.gists.listPublic()
        .then(({ data }) => {
            if (!data.error) {
                dispatch({
                    type: GIST.GET_GIST,
                    loading: false,
                    data: data,
                });
            } else {
                handleError(data?.message);
                dispatch({ type: GIST.GET_GIST, loading: false, data: [] });
            }
        }
        ).catch((error) => {
            handleError(error?.message || 'something went wrong')
            dispatch({ type: GIST.GET_GIST, loading: false, data: [] });
            console.log("getPublicGists", error)
        });
}


//API modified to get the searched gist userwise
export const getGistForUser = (username, CB) => (dispatch) => {
    dispatch({ type: GIST.GET_GIST, loading: true })
    octokit.gists.listForUser({ username: username })
        .then(({ data }) => {
            if (!data.error) {
                dispatch({
                    type: GIST.GET_GIST,
                    loading: false,
                    data: data,
                });
            } else {
                handleError(data?.message);
                dispatch({ type: GIST.GET_GIST, loading: false, data: [] });
            }
        }
        ).catch((error) => {
            handleError(error?.message || 'something went wrong')
            dispatch({ type: GIST.GET_GIST, loading: false, data: [] });
            console.log("getPublicGists", error)
        });
}