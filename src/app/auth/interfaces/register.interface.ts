export interface RegisterUser{
   id?: string;

   doc_type: string;

   ident_document: string;

   names: string;

   last_name: string;

   phone: string;

   username: string;

   password: string;

   email: string;

   creation_date?: Date;

   role?: string;

   state?: boolean;
}
