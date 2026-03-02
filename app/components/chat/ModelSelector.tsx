import type { ProviderInfo } from '~/types/model';
import type { ModelInfo } from '~/lib/modules/llm/types';

interface ModelSelectorProps {
  model?: string;
  setModel?: (model: string) => void;
  provider?: ProviderInfo;
  setProvider?: (provider: ProviderInfo) => void;
  modelList: ModelInfo[];
  providerList: ProviderInfo[];
  apiKeys: Record<string, string>;
  modelLoading?: string;
}

export const ModelSelector = (_props: ModelSelectorProps) => {
  return (
    <div className="flex gap-2 flex-col sm:flex-row mb-2">
      <div className="flex items-center gap-2 w-full p-2 rounded-lg border border-bolt-elements-borderColor bg-bolt-elements-prompt-background text-bolt-elements-textPrimary text-sm">
        <span className="text-bolt-elements-textSecondary">Anthropic</span>
        <span className="text-bolt-elements-textTertiary">/</span>
        <span>Claude Sonnet 4.5</span>
      </div>
    </div>
  );
};
