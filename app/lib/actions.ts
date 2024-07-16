
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
    errors?: {
        customerId?: string[];
        amount?: string[];
        status?: string[];
    };
    message?: string | null;
}

export async function CreateProject(formData: FormData) {
  // const validatedFields = CreateInvoice.safeParse({
  //     customerId: formData.get('customerId'),
  //     amount: formData.get('amount'),
  //     status: formData.get('status'),
  // });
  // console.log(validatedFields);
  // if (!validatedFields.success) {
  //     return {
  //         errors: validatedFields.error.flatten().fieldErrors,
  //         message: 'Missing Fields. Failed to Create Invoice.',
  //     }
  // }

  console.log(formData);

  const { ProjectTitle, DueDate, OwnerID, Status, Summary } = {
    ProjectTitle: formData.get('ProjectTitle'),
    DueDate: formData.get('DueDate'),
    OwnerID: formData.get('OwnerID'),
    Status: formData.get('Status'),
    Summary: formData.get('Summary'),
  };

  console.log(ProjectTitle, DueDate, OwnerID, Status, Summary )

  // Create a user-friendly 3-letter project ID based on the name of the project
  function generateProjectId(projectTitle: string) {
    const idLength = 3;
    let words = projectTitle.split(" ");
    let acronym = [];

    while (words.length < idLength) {
      words.push((Math.random() * 10).toString());
    }

    for (let i = 0; i < idLength; i++) {
      acronym.push(words[i][0]);
    }
    return acronym.join("").toUpperCase();
  }


    const projectID = typeof ProjectTitle === 'string'
    ? generateProjectId(ProjectTitle)
    : "Placeholder title";
  
  console.log(`ProjectID: ${projectID}, 
    ProjectTitle: ${ProjectTitle}, 
    DueDate: ${DueDate}, 
    OwnerID: ${OwnerID}, 
    Status: ${Status}, 
    Summary: ${Summary}`)

  // try {
  //   await sql`
  //   INSERT INTO Projects (ProjectID, ProjectTitle, DueDate, OwnerID, Status, Summary)
  //   VALUES (${projectID}, ${ProjectTitle}, ${DueDate}, ${OwnerID}, ${Status}, ${Summary})
  //   `;
  // } catch (error) {
  //   return {
  //     message: "Database Error: Failed to Create Project.",
  //   };
  // }
  revalidatePath("/projects");
  redirect("/projects");

}


/*
const UpdateProject = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, prevState: any, formData: FormData) {

    const validatedFields = UpdateProject.safeParse({
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Update Invoice.',
        }
    }

    const { customerId, amount, status } = validatedFields.data;
    const amountInCents = amount * 100;

    try {
    await sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
    `;
    } catch (error) {
        return {
            message: 'Database Error: Failed to Update Invoice.'
        }
    }
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
}
    */