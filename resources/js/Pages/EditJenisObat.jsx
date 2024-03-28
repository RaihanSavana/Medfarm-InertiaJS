import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm, router } from "@inertiajs/react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";

export default function Edit({ auth, jenis_obats }) {

    const { data, setData, post, processing, errors, reset, onSuccess} = useForm({
        jenis_obat: jenis_obats.jenis_obat
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        router.post(`/jenisobat/edit/${jenis_obats.id}`, {
            _method: "patch",
            jenis_obat: data.jenis_obat,
        })

    };
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Edit : {jenis_obats.jenis_obat}
                </h2>
            }
        >
            <Head title="Edit" />
            <div className="container mx-auto px-40 py-6 justify-between items-center">
                <br />
                <form onSubmit={handleUpdate}>
                    <div>
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Jenis Obat {}</h2>
                        <br />
                            <InputLabel htmlFor="jenis_obat" value="Jenis Obat" />
                        <TextInput
                            id="jenis_obat"
                            name="jenis_obat"
                            value={data.jenis_obat}
                            className="mt-1 block w-full"
                            onChange={(e) => setData("jenis_obat", e.target.value)}
                            required
                        />

                        <InputError message={errors.jenis_obat} className="mt-2" />
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
