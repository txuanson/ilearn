import callApi from "./callApi";

export const deleteSection = (section_id) =>
    callApi({ url: `/tutor/section/${section_id}`, method: 'DELETE' });