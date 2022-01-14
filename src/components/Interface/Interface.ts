export interface DataValues {
    id: number,
    document_name: string,
    created_at: string,
    field_count: number
}

export interface ObjectValues {
    document_name: string,
    form_values: [
        {
            field_seq: string,
            is_mandatory: number,
            field_type: number,
            field_name: string,
            select_values?: [
                {
                    value: boolean,
                    label: string,
                },
                {
                    value: boolean,
                    label: string,
                },
            ] | null
        }]
}
