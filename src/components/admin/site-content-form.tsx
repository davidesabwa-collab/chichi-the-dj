'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Trash2, Plus } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ICON_KEYS, SiteIcon, SOCIAL_ICON_KEYS, SocialIcon } from '@/lib/site-icons';
import type { FieldDef } from '@/lib/site-content-schemas';

function emptyValueForField(field: FieldDef): any {
    switch (field.type) {
        case 'list-text':
        case 'list-object':
            return [];
        case 'number':
            return 0;
        default:
            return '';
    }
}

function emptyItemForFields(fields: FieldDef[]): Record<string, any> {
    const obj: Record<string, any> = {};
    fields.forEach((f) => { obj[f.key] = emptyValueForField(f); });
    return obj;
}

function FieldEditor({ field, value, onChange }: { field: FieldDef; value: any; onChange: (v: any) => void }) {
    switch (field.type) {
        case 'text':
            return <Input value={value ?? ''} onChange={(e) => onChange(e.target.value)} className="bg-gray-800 border-gray-700" />;
        case 'textarea':
            return <Textarea value={value ?? ''} onChange={(e) => onChange(e.target.value)} className="bg-gray-800 border-gray-700" rows={3} />;
        case 'number':
            return <Input type="number" value={value ?? 0} onChange={(e) => onChange(parseFloat(e.target.value) || 0)} className="bg-gray-800 border-gray-700" />;
        case 'image':
            return (
                <div className="flex items-center gap-3">
                    {value ? (
                        <div className="relative w-14 h-14 flex-shrink-0 rounded overflow-hidden border border-gray-700 bg-gray-800">
                            <Image src={value} alt="" fill className="object-cover" unoptimized />
                        </div>
                    ) : null}
                    <Input value={value ?? ''} onChange={(e) => onChange(e.target.value)} placeholder="https://..." className="bg-gray-800 border-gray-700" />
                </div>
            );
        case 'icon':
        case 'social-icon': {
            const keys = field.type === 'icon' ? ICON_KEYS : SOCIAL_ICON_KEYS;
            return (
                <div className="flex items-center gap-3">
                    {value ? (
                        field.type === 'icon'
                            ? <SiteIcon name={value} className="h-5 w-5 text-primary flex-shrink-0" />
                            : <SocialIcon name={value} className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : null}
                    <Select value={value || undefined} onValueChange={onChange}>
                        <SelectTrigger className="bg-gray-800 border-gray-700">
                            <SelectValue placeholder="Select an icon" />
                        </SelectTrigger>
                        <SelectContent>
                            {keys.map((k) => <SelectItem key={k} value={k}>{k}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
            );
        }
        case 'list-text': {
            const items: string[] = Array.isArray(value) ? value : [];
            return (
                <div className="space-y-2">
                    {items.map((item, i) => (
                        <div key={i} className="flex gap-2">
                            <Input
                                value={item}
                                onChange={(e) => {
                                    const next = [...items];
                                    next[i] = e.target.value;
                                    onChange(next);
                                }}
                                className="bg-gray-800 border-gray-700"
                            />
                            <Button type="button" variant="destructive" size="icon" onClick={() => onChange(items.filter((_, idx) => idx !== i))}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                        </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" onClick={() => onChange([...items, ''])}>
                        <Plus className="h-4 w-4 mr-1" /> Add
                    </Button>
                </div>
            );
        }
        case 'list-object': {
            const items: Record<string, any>[] = Array.isArray(value) ? value : [];
            const subFields = field.fields || [];
            return (
                <div className="space-y-4">
                    {items.map((item, i) => (
                        <div key={i} className="border border-gray-700 rounded-md p-4 space-y-3 bg-gray-900/60">
                            <div className="flex justify-end">
                                <Button type="button" variant="destructive" size="sm" onClick={() => onChange(items.filter((_, idx) => idx !== i))}>
                                    <Trash2 className="h-4 w-4 mr-1" /> Remove
                                </Button>
                            </div>
                            <FieldList
                                fields={subFields}
                                data={item}
                                onChange={(key, val) => {
                                    const next = [...items];
                                    next[i] = { ...next[i], [key]: val };
                                    onChange(next);
                                }}
                            />
                        </div>
                    ))}
                    <Button type="button" variant="outline" size="sm" onClick={() => onChange([...items, emptyItemForFields(subFields)])}>
                        <Plus className="h-4 w-4 mr-1" /> Add Item
                    </Button>
                </div>
            );
        }
        default:
            return null;
    }
}

function FieldList({ fields, data, onChange }: { fields: FieldDef[]; data: Record<string, any>; onChange: (key: string, value: any) => void }) {
    return (
        <div className="space-y-4">
            {fields.map((field) => (
                <div key={field.key}>
                    <Label className="text-gray-300 mb-1.5 block">{field.label}</Label>
                    <FieldEditor field={field} value={data?.[field.key]} onChange={(v) => onChange(field.key, v)} />
                </div>
            ))}
        </div>
    );
}

interface SiteContentFormProps {
    fields: FieldDef[];
    initialData: Record<string, any>;
    onSave: (data: Record<string, any>) => Promise<void>;
}

export function SiteContentForm({ fields, initialData, onSave }: SiteContentFormProps) {
    const [data, setData] = useState<Record<string, any>>(initialData || {});
    const [saving, setSaving] = useState(false);

    const handleChange = (key: string, value: any) => setData((prev) => ({ ...prev, [key]: value }));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSaving(true);
        try {
            await onSave(data);
        } finally {
            setSaving(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <FieldList fields={fields} data={data} onChange={handleChange} />
            <Button type="submit" disabled={saving} className="w-full">{saving ? 'Saving...' : 'Save Changes'}</Button>
        </form>
    );
}
