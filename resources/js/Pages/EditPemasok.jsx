import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Edit({ auth, pemasoks }) {

    const { data, setData, post, processing, errors, reset, onSuccess} = useForm({
        nama_pemasok: pemasoks.nama_pemasok,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        router.post(`/pemasok/edit/${pemasoks.id}`, {
            _method: "patch",
            nama_pemasok: data.nama_pemasok,
        })

    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit : {pemasoks.nama_pemasok}
                </h2>
            }
        >
            <Head title="Edit" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={handleUpdate}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Pemasok {}</h2>
                        <br />
                            <InputLabel htmlFor="nama_pemasok" value="Nama_Pemasok" />
                        <TextInput
                            id="nama_pemasok"
                            name="nama_pemasok"
                            value={data.nama_pemasok}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("nama_pemasok", e.target.value)}
                            required
                        />

                        <InputError message={errors.nama_pemasok} className="mt-2" />
                    </div>
                    <div className="flex items-center justify-end mt-4">

                        <PrimaryButton className="ms-4 bg-green-500" disabled={processing}>
                            Update
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
}
