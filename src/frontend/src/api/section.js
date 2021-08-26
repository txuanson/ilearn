import callApi from "./callApi";

export const getSectionInfoTutor = (section_id) =>
    callApi({ url: `/tutor/section/${section_id}`, method: 'GET' });

export const createSection = (payload) =>
    callApi({ url: `/tutor/section`, method: 'POST', data: payload });

export const editSection = (section_id, payload) =>
    callApi({ url: `/tutpr/section/${section_id}`, method: 'PATCH', data: payload });

export const deleteSection = (section_id) =>
    callApi({ url: `/tutor/section/${section_id}`, method: 'DELETE' });