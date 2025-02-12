import fetchClient from "./fetchClient.js";
import AppConstants from "../appConstants.js";


export default class BaseApi {
    getResourceName() {
        throw new Error('Please implement this method');
    }

    getAll() {
        const url = `${ AppConstants.API_URL }/${ this.getResourceName() }?_sort=updatedAt&_order=desc`;
        return fetchClient.get(url);
    }

    getDetail(postId) {
        const url = `${ AppConstants.API_URL }/${ this.getResourceName() }/${ postId }`;
        return fetchClient.get(url);
    }

    add(post) {
        const url = `${ AppConstants.API_URL }/${ this.getResourceName() }`;
        return fetchClient.post(url, post);
    }

    update(post) {
        const url = `${ AppConstants.API_URL }/${ this.getResourceName() }/${ post.id }`;
        return fetchClient.patch(url, post);
    }

    remove(postId) {
        const url = `${ AppConstants.API_URL }/${ this.getResourceName() }/${ postId }`;
        return fetchClient.delete(url);
    }
}

